import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // title = 'manager_rebliss app is running!';
  loader = true;
  isSmallScreen: boolean = false;
  private breakpointSubscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });

    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
