import { TestBed, async } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {UsersService} from '../services/users.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent
      ],
      providers: [UsersService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works well!'`, async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works well!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works well!');
  }));

  it('should display a list of users located near by', async(() => {
    // don't do anything yet 
    const fixture = TestBed.createComponent(UsersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
  }))
});
