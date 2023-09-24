import { Inject } from '@nestjs/common';
import { UserDto, CreateUserDto, UpdateUserDto } from './dto';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { UUIDServiceInterface } from 'src/uuid/uuid.service.interface';

export class UserRepository implements UserRepositoryInterface {
  private users: Array<UserDto>;

  constructor(
    @Inject('UUIDServiceInterface')
    private readonly uuidService: UUIDServiceInterface,
  ) {
    this.users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: 'Big Pig',
      email: 'BigPig@local.com',
      phoneNumber: '0900000000',
      userName: 'pig pig',
    });

    this.users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });
  }

  async getByStoreId(storeId: string): Promise<Array<UserDto>> {
    return this.users;
  }
  async getById(id: string): Promise<UserDto> {
    return this.users.find((x) => x.id === id);
  }
  async createUser(newUser: CreateUserDto, userId: string): Promise<UserDto[]> {
    this.users.push({
      id: await this.uuidService.getUUID(),
      fullName: newUser.fullName,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      userName: newUser.userName,
    });

    return this.users;
  }
  async updaterUser(
    id: string,
    oldUser: UpdateUserDto,
    userId: string,
  ): Promise<UserDto[]> {
    let data = this.users.find((x) => x.id === id);

    data.fullName = oldUser.fullName;
    data.email = oldUser.email;
    data.phoneNumber = oldUser.phoneNumber;
    data.userName = oldUser.userName;

    return this.users;
  }
  async deleteUser(id: string): Promise<UserDto[]> {
    this.users = this.users.filter((x) => x, id !== id);

    return this.users;
  }
}
