import { Test, TestingModule } from '@nestjs/testing';
import { ServiceEntrepreneurService } from './service_entrepreneur.service';

describe('ServiceEntrepreneurService', () => {
  let service: ServiceEntrepreneurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceEntrepreneurService],
    }).compile();

    service = module.get<ServiceEntrepreneurService>(
      ServiceEntrepreneurService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
