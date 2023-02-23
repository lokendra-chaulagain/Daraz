import { Test, TestingModule } from '@nestjs/testing';
import { SearchTagService } from './search-tag.service';

describe('SearchTagService', () => {
  let service: SearchTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchTagService],
    }).compile();

    service = module.get<SearchTagService>(SearchTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
