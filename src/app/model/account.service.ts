import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  email: string;
  userName: string;
  password: string;
  amount: number;

  constructor(email: string, userName: string, password: string, amount: number) {
    // this.email = '';
    // this.userName = '';
    // this.password = '';
    // this.amount = 0;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.amount = amount;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getUsername(): string {
    return this.userName;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  // true or false
  checkLogin(email: string, password: string): boolean {
    return (this.email === email && this.password === password);
  }
}
