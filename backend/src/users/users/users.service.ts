import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(user: Partial<User>): Promise<User> {
    const newUser: User = {
      id: Date.now().toString(),
      username: user.username!,
      email: user.email!,
      password: user.password!,
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(u => u.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
