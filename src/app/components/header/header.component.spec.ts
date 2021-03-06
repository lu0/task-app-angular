import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render as header's heading 'Task Tracker'", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Task Tracker');
  });

  it("should render an 'app-button'", () => {
    const addButton = fixture.debugElement.query(By.css('app-button'))
    expect(addButton).toBeTruthy();
  });

  it("should input 'Add' to app-button", () => {
    const addButton = fixture.debugElement.query(By.css('app-button'))
    expect(addButton.attributes.text).toEqual('Add');
  })

  it("should input 'green' to app-button", () => {
    const addButton = fixture.debugElement.query(By.css('app-button'))
    expect(addButton.attributes.color).toEqual('green');
  })
});
