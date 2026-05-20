import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.css'],
})
export class GridLockPrivacyPolicyPage implements OnInit {
  appName: string = 'Gridlock';
  lastUpdated: string = 'May 18, 2026';
  contactEmail: string = 'aryobarzan.atashpendar@gmail.com';

  constructor() {}

  ngOnInit(): void {}
}
