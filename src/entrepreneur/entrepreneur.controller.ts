import { Controller } from '@nestjs/common';
import { EntrepreneurService } from './entrepreneur.service';

@Controller('entrepreneur')
export class EntrepreneurController {
  constructor(private readonly entrepreneurService: EntrepreneurService) {}
}
