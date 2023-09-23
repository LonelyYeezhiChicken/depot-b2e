import { Inject, Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';
import { UUIDServiceInterface } from 'src/uuid/uuid.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UUIDServiceInterface')
    private readonly uuidService: UUIDServiceInterface) {}

  /** 使用 store id 查出底下所有的使用者
   *
   * @param storeId store id
   * @returns user list
   */
  async getUserByStoreId(storeId: string): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

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
    return users;
  }

  /** 使用 user id 查詢使用者
   *
   * @param id user id
   * @returns user
   */
  async getUserById(id: string): Promise<UserDto> {
    let user: UserDto = {
      id: await this.uuidService.getUUID(),
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    };

    return user;
  }
  /** 新增使用者
   *
   * @param newUser new user
   * @param userId update user id
   * @returns new user list
   */
  async createUser(
    newUser: CreateUserDto,
    userId: string,
  ): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: '591afd77-32d0-44c2-a487-b6bd8850a0fe',
      fullName: newUser.fullName,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      userName: newUser.userName,
    });

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
    return users;
  }

  /**更新使用者
   *
   * @param id user id
   * @param oldUser edit user
   * @param userId update user id
   * @returns user list
   */
  async updaterUser(
    id: string,
    oldUser: UpdateUserDto,
    userId: string,
  ): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: oldUser.fullName,
      email: oldUser.email,
      phoneNumber: oldUser.phoneNumber,
      userName: oldUser.fullName,
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
    return users;
  }

  /**刪除使用者
   *
   * @param id user id
   * @returns user list
   */
  async deleteUser(id: string): Promise<Array<UserDto>> {
    let users = new Array<UserDto>();

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
    return users;
  }
}
