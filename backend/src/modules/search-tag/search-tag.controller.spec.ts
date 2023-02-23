import { Test, TestingModule } from '@nestjs/testing';
import { SearchTagController } from './search-tag.controller';
import { SearchTagService } from './search-tag.service';

describe('SearchTagController', () => {
  let controller: SearchTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchTagController],
      providers: [SearchTagService],
    }).compile();

    controller = module.get<SearchTagController>(SearchTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
