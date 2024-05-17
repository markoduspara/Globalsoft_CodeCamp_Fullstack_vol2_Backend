import { Injectable } from '@nestjs/common';
import { CreateUserDto, ResponseUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const user = this.usersRepository.create(createUserDto as DeepPartial<User>);
    await this.usersRepository.save(user);
    const response = new ResponseUserDto();
    response.succceeded = user === null;
    response.message = "Uspješno kreiran korisnik!";
    return response;
   }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return undefined; // or throw an error if you prefer
    }
  
    // Update the user properties
    Object.assign(user, updateUserDto);
  
    // Save the updated user
    await this.usersRepository.save(user);
  
    return user;
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return false; // or throw an error if you prefer
    }
  
    await this.usersRepository.remove(user);
  
    return true;
  }
}