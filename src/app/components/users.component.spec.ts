import { TestBed, async } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../services/users.service';
import { User } from '../model/user.class';
import { IUsers } from '../services/iusers';


class MockUsersService implements IUsers {
  getAllUsers(): User[] {
    return [
      new User('1234556678', 'Little biography'),
      new User('9876543210', 'Nothing to say...'),
    ];
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {

    let usersService = new MockUsersService()
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent
      ],
      providers: [{ provide: UsersService, useValue: usersService }]
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
    const lis = compiled.querySelectorAll('li');
    expect(lis[0].textContent).toContain('Little biography');
    expect(lis[1].textContent).toContain('Nothing to say...');
  }))
});


