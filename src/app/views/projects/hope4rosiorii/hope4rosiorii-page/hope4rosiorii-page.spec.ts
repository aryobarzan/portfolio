import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hope4rosioriiPage } from './hope4rosiorii-page';

describe('Hope4rosioriiPage', () => {
  let component: Hope4rosioriiPage;
  let fixture: ComponentFixture<Hope4rosioriiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hope4rosioriiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(Hope4rosioriiPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
