import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './authDto/login.dto';
import { Response } from 'express'

@Controller('auth')
export class AuthController {
    constructor( private readonly authservice: AuthService) {}

    @Post('/register')
    async register(@Body() loginDto: LoginDto, @Res() res: Response): Promise<Response> {
        try {
            const result = await this.authservice.register(loginDto);
            return res.status(201).json({
                message: result.message,
                user: result.user,
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    @Post('/login')
    async login (@Body() loginDto: LoginDto, @Res() res: Response): Promise<Response> {
        try {
            const result = await this.authservice.login(loginDto);
            return res.status(200).json({
                token: result.token,
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
}
