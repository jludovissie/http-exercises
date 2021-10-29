import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  @ViewChild('f') myMovieForm : NgForm


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  onCreate(){
    this.http.post
    ('https://http-request-exercies-default-rtdb.firebaseio.com/movies.json',
    this.myMovieForm.value
    ).subscribe(responseData => {
      console.log(responseData)
    })
  }
  onRecieveMovies(){
    this.http.get
    ('https://http-request-exercies-default-rtdb.firebaseio.com/movies.json').pipe(map(responseData =>{
      const movieArray= [];
      for(const key in responseData){
        if (responseData.hasOwnProperty(key)){
          movieArray.push({...responseData[key], id: key})
        }

      }
    ))
    })
  }
}

