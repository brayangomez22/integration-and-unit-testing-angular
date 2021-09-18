import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Must show the legend', () => {
    component.leyenda = 'Loading progress';

    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('Loading progress');
  });

  it('It must show in the input the value of the progress', () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elem: HTMLInputElement = input.nativeElement;

      expect(elem.value).toBe('55');
    });
  });

  it('It must increase / decrease by 5, with a click on the button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

    buttons[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    buttons[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('The component title should show the progress', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click', null);

    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('45');
  });
});
