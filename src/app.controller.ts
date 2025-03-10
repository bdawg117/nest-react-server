import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { App } from 'supertest/types';
import { CreateMessageDto } from './create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly appService: AppService) {}

  @Post('send')
  async sendMessage(@Body() createMessageDto: CreateMessageDto) {
    await this.appService.publishMessage('my-channel', createMessageDto.message)
    return { status: 'Message sent' }
  }



}