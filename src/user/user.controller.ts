import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateUserDto, CreateUserDto, UserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':storeId')
  async findAll(@Param('id') storeId: string): Promise<Array<UserDto>> {
    return await this.userService.getUserByStoreId(storeId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return await this.userService.getUserById(id);
  }

  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    return await this.userService.createUser(createCatDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
    return await this.userService.updaterUser(id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
