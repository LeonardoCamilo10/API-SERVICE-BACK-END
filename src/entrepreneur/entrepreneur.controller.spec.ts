import { Test, TestingModule } from '@nestjs/testing';
import { EntrepreneurController } from './entrepreneur.controller';

describe('EntrepreneurController', () => {
  let controller: EntrepreneurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrepreneurController],
    }).compile();

    controller = module.get<EntrepreneurController>(EntrepreneurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
