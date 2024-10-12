import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  title = 'financial-planning-tool';

  // Client 1 fields
  client1Surname: string = '';
  client1GivenNames: string = '';
  client1PreferredName: string = '';
  client1Title: string = '';
  client1Dob: string = '';
  client1MaritalStatus: string = '';
  client1CountryOfBirth: string = '';
  client1Address: string = '';
  client1Email: string = '';
  client1Phone: string = '';
  client1Age: number | null = null;

  // Client 2 fields
  client2Surname: string = '';
  client2GivenNames: string = '';
  client2PreferredName: string = '';
  client2Title: string = '';
  client2Dob: string = '';
  client2MaritalStatus: string = '';
  client2CountryOfBirth: string = '';
  client2Address: string = '';
  client2Email: string = '';
  client2Phone: string = '';
  client2Age: number | null = null;

  // Method to calculate age based on DOB
  calculateAge(client: string) {
    const today = new Date();
    let dob: Date | null = null;

    if (client === 'client1' && this.client1Dob) {
      dob = new Date(this.client1Dob);
    } else if (client === 'client2' && this.client2Dob) {
      dob = new Date(this.client2Dob);
    }

    if (dob) {
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        if (client === 'client1') this.client1Age = age - 1;
        if (client === 'client2') this.client2Age = age - 1;
      } else {
        if (client === 'client1') this.client1Age = age;
        if (client === 'client2') this.client2Age = age;
      }
    }
  }

  // Add the onSubmit method here
  onSubmit() {
    // For now, just log the form data to the console
    console.log("Client 1 Data:", {
      surname: this.client1Surname,
      givenNames: this.client1GivenNames,
      preferredName: this.client1PreferredName,
      title: this.client1Title,
      dob: this.client1Dob,
      maritalStatus: this.client1MaritalStatus,
      countryOfBirth: this.client1CountryOfBirth,
      address: this.client1Address,
      email: this.client1Email,
      phone: this.client1Phone
    });

    console.log("Client 2 Data:", {
      surname: this.client2Surname,
      givenNames: this.client2GivenNames,
      preferredName: this.client2PreferredName,
      title: this.client2Title,
      dob: this.client2Dob,
      maritalStatus: this.client2MaritalStatus,
      countryOfBirth: this.client2CountryOfBirth,
      address: this.client2Address,
      email: this.client2Email,
      phone: this.client2Phone
    });
  }
}