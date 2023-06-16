import { Test, TestingModule } from '@nestjs/testing';
import { ServiceEntrepreneurController } from './service_entrepreneur.controller';

describe('ServiceEntrepreneurController', () => {
  let controller: ServiceEntrepreneurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceEntrepreneurController],
    }).compile();

    controller = module.get<ServiceEntrepreneurController>(ServiceEntrepreneurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
