export class CreateUserDto {
  name: string;
  password: string;
}

export class ResponseUserDto {
  succceeded: boolean;
  message: string;
}
