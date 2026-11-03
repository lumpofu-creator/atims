import { Pipe, PipeTransform } from '@angular/core';
import { AppPreferencesService } from './app-preferences.service';

@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  constructor(private preferences: AppPreferencesService) {}

  transform(value: string | null | undefined): string {
    return value ? this.preferences.translate(value) : '';
  }
}
