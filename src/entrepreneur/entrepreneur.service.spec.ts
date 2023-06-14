import { Test, TestingModule } from '@nestjs/testing';
import { EntrepreneurService } from './entrepreneur.service';

describe('EntrepreneurService', () => {
  let service: EntrepreneurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrepreneurService],
    }).compile();

    service = module.get<EntrepreneurService>(EntrepreneurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
