import { Inject, Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';
import { UUIDServiceInterface } from 'src/uuid/uuid.service.interface';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';
import { ErrorCheckServiceInterface } from 'src/error-check/error-check.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepo: UserRepositoryInterface,
    @Inject('ErrorCheckServiceInterface')
    private readonly errorCheckService: ErrorCheckServiceInterface,
  ) {}

  /** 使用 store id 查出底下所有的使用者
   *
   * @param storeId store id
   * @returns user list
   */
  async getUserByStoreId(storeId: string): Promise<Array<UserDto>> {
    // 檢查參數合法性
    this.errorCheckService.checkOneValue('storeId', storeId);

    return await this.userRepo.getByStoreId(storeId);
  }

  /** 使用 user id 查詢使用者
   *
   * @param id user id
   * @returns user
   */
  async getUserById(id: string): Promise<UserDto> {
    // 檢查參數合法性
    this.errorCheckService.checkOneValue('user id', id);

    return await this.userRepo.getById(id);
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
    // 檢查參數合法性
    this.errorCheckService.checkOneValue('create user id', userId);
    this.errorCheckService.checkOneValue('fullName', newUser.fullName);
    this.errorCheckService.checkOneValue('email', newUser.email);
    this.errorCheckService.checkOneValue('phoneNumber', newUser.phoneNumber);
    this.errorCheckService.checkOneValue('userName', newUser.userName);
    this.errorCheckService.checkOneValue('password', newUser.password);

    return await this.userRepo.createUser(newUser, userId);
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
    // 檢查參數合法性
    this.errorCheckService.checkOneValue('create user id', userId);
    this.errorCheckService.checkOneValue('fullName', oldUser.fullName);
    this.errorCheckService.checkOneValue('email', oldUser.email);
    this.errorCheckService.checkOneValue('phoneNumber', oldUser.phoneNumber);
    this.errorCheckService.checkOneValue('userName', oldUser.userName);
    this.errorCheckService.checkOneValue('user id', id);
    return await this.userRepo.updaterUser(id, oldUser, userId);
  }

  /**刪除使用者
   *
   * @param id user id
   * @returns user list
   */
  async deleteUser(id: string): Promise<Array<UserDto>> {
    this.errorCheckService.checkOneValue('user id', id);
    return await this.userRepo.deleteUser(id);
  }
}
