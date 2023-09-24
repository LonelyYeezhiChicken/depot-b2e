import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { ErrorCheckServiceInterface } from 'src/error-check/error-check.service.interface';
import { UserDto } from './dto';
import { ErrorCheckModule } from '../error-check/error-check.module';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepositoryInterface;
  let errorCheckService: ErrorCheckServiceInterface;
  let users: Array<UserDto>;

  beforeEach(async () => {
    users = new Array<UserDto>();
    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: 'Big Pig',
      email: 'BigPig@local.com',
      phoneNumber: '0900000000',
      userName: 'pig pig',
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });

    const module: TestingModule = await Test.createTestingModule({
      imports: [ErrorCheckModule],
      providers: [
        UserService,
        {
          provide: 'UserRepositoryInterface',
          useValue: {
            // 在這裡模擬 UserRepositoryInterface 的方法
            getByStoreId: jest.fn((storeId) => {
              // 在這裡模擬 getByStoreId 方法的行為
              if (storeId === 'validStoreId') {
                return Promise.resolve(users);
              } else {
                return Promise.resolve([]); // 返回一個空陣列作為模擬
              }
            }),
            getById: jest.fn((id) => {
              return Promise.resolve(users.find((x) => x.id === id));
            }),
            createUser: jest.fn((newUser, userId) => {
              users.push({
                id: '99999999-37b5-4977-bffc-5afc5db99123',
                fullName: newUser.fullName,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                userName: newUser.userName,
              });
              return Promise.resolve(users);
            }),
            updaterUser: jest.fn((id, oldUser, userId) => {
              let data = users.find((x) => x.id === id);
              data.fullName = oldUser.fullName;
              data.email = oldUser.email;
              data.phoneNumber = oldUser.phoneNumber;
              data.userName = oldUser.userName;
              return Promise.resolve(users);
            }),
            deleteUser: jest.fn((id) => {
              users = users.filter((x) => x, id !== id);
              return Promise.resolve(users);
            }),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepositoryInterface>(
      'UserRepositoryInterface',
    );
    errorCheckService = module.get<ErrorCheckServiceInterface>(
      'ErrorCheckServiceInterface',
    );
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getUserByStoreId', () => {
    // case1
    it('store id is validStoreId, return users list', async () => {
      const storeId = 'validStoreId';

      const actual = await userService.getUserByStoreId(storeId);

      expect(actual).toStrictEqual(users);
    });

    // case2
    it('store id is store123, return []', async () => {
      const storeId = 'store123';

      const actual = await userService.getUserByStoreId(storeId);

      expect(actual).toStrictEqual([]);
    });

    // case3
    it("store id is '', throw exception data cant not empty", async () => {
      const storeId = '';

      const expectedError = new Error('storeId,資料不能為空或未定義');

      await expect(
        async () => await userService.getUserByStoreId(storeId),
      ).rejects.toThrow(expectedError);
    });

    // case4
    it('store id is undefined, throw exception data is undefined', async () => {
      const storeId = undefined;

      const expectedError = new Error('storeId,資料未定義');

      await expect(
        async () => await userService.getUserByStoreId(storeId),
      ).rejects.toThrow(expectedError);
    });
  });

  // 添加其他方法的測試用例，使用相同的方式模擬相依服務的行為
});
