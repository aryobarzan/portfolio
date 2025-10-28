import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// declare var _flutter: any;

@Component({
  selector: 'app-dartblock',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dartblock.html',
  styleUrl: './dartblock.scss',
})
export class Dartblock {
  // implements AfterViewInit
  // constructor(private renderer: Renderer2) {}
  // ngAfterViewInit(): void {
  //   // This lifecycle hook is called after Angular has fully initialized
  //   // the component's view and its child views. This ensures that the
  //   // `flutter_host` div exists in the DOM before we load the script.
  //   // Dynamically create a script element
  //   const script = this.renderer.createElement('script');
  //   // Set the script's source to the path of the Flutter bootstrap script
  //   // Note: The path assumes you copied the build output into `assets/flutter`.
  //   script.src = 'public/assets/dartblock/flutter_bootstrap.js';
  //   // Add the script to the <body> of the document.
  //   // The renderer is the standard, secure way to manipulate the DOM in Angular.
  //   this.renderer.appendChild(document.body, script);
  // }
  // ngAfterViewInit(): void {
  //   this.loadFlutterScript();
  // }
  // private loadFlutterScript(): void {
  //   const script = document.createElement('script');
  //   script.src = 'assets/dartblock/flutter_bootstrap.js';
  //   script.onload = () => {
  //     // The script is now loaded, so it's safe to call _flutter.loader.load
  //     this.initializeFlutterApp();
  //   };
  //   // Append the script to the body, as recommended for async loading
  //   document.body.appendChild(script);
  // }
  // private initializeFlutterApp(): void {
  //   _flutter.loader.load({
  //     config: {
  //       hostElement: document.getElementById('dartblock-host'),
  //     },
  //   });
  // }
  // ngAfterViewInit(): void {
  //   _flutter.loader.load({
  //     config: {
  //       hostElement: document.getElementById('dartblock-host'),
  //     },
  //   });
  // }
}
