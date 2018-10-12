import { SearchSelectModule } from './search-select.module';

describe('SearchSelectModule', () => {
  let searchSelectModule: SearchSelectModule;

  beforeEach(() => {
    searchSelectModule = new SearchSelectModule();
  });

  it('should create an instance', () => {
    expect(searchSelectModule).toBeTruthy();
  });
});
