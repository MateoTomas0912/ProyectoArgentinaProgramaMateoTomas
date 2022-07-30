import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosPadreComponent } from './elementos-padre.component';

describe('ElementosPadreComponent', () => {
  let component: ElementosPadreComponent;
  let fixture: ComponentFixture<ElementosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
