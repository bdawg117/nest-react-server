import { Injectable } from "@nestjs/common";
import { channel } from "diagnostics_channel";
import createClient from 'ioredis'


@Injectable()
export class AppService {
  private publisher
  private subscriber

  constructor() {
    this.publisher = new createClient({ host: 'localhost', port: 6379})
    this.subscriber = new createClient({ host: 'localhost', port: 6379})
  }

  async publishMessage(channel: string, message: string) {
    await this.publisher.publish(channel, message)
    console.log(`Pubbed message to channel: ${channel} with message: ${message}`)
  }


  
}