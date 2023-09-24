import { UpdateUserDto, CreateUserDto, UserDto } from '../dto';


export interface UserRepositoryInterface {
  /** 使用 store id 查出底下所有的使用者
   *
   * @param storeId store id
   * @returns user list
   */
  getByStoreId(storeId: string): Promise<Array<UserDto>>;

  /** 使用 user id 查詢使用者
   *
   * @param id user id
   * @returns user
   */
  getById(id: string): Promise<UserDto>;

  /** 新增使用者
   *
   * @param newUser new user
   * @param userId update user id
   * @returns new user list
   */
  createUser(newUser: CreateUserDto, userId: string): Promise<Array<UserDto>>;

  /**更新使用者
   *
   * @param id user id
   * @param oldUser edit user
   * @param userId update user id
   * @returns user list
   */
  updaterUser(
    id: string,
    oldUser: UpdateUserDto,
    userId: string,
  ): Promise<Array<UserDto>>;

  /**刪除使用者
   *
   * @param id user id
   * @returns user list
   */
  deleteUser(id: string): Promise<Array<UserDto>>;
}