import { Component, OnInit,NgModule,Pipe,} from '@angular/core';
import { trigger, style, transition, animate, group }
    from '@angular/animations';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers,ResponseType, ResponseContentType } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('1.5s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('1.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
 
})
export class DashboardComponent implements OnInit {
 

  constructor( private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }
  
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['PRESENT'
,'ABSENT','LEAVE'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]

pieChartData:any = [
    { 
        data:  [] 
    }
  ];
   p:any
  count1=[];
cl=[];
ss=[];
  class=[];
  section=[];
  value=[];
  id=[];
  date=[];
  class123=[]
  cu=[]
  ku=[]
  fetchclass=function()
  {
    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
  
         // var classes=this.class[0].classname;
  
       // console.log("vsjfbvckjs "+this.teacherslist)
  
     
      }
  )
  }
  fetchdate=function()
  {
    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
      (res:Response) =>{
        this.cl=res.json();
  
         // var classes=this.class[0].classname;
  
       // console.log("vsjfbvckjs "+this.teacherslist)
  
     
      }
  )
  }
  fetchsection=function(pro)
  {
    var hash={};
    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();
         // var classes=this.class[0].classname;
         var data = this.class;
  
         for(var i in data)
         {
              var id = data[i].classes.classid;
            hash[data[i].classes.classname]=data[i].classes.sections
         }
    
  this.section=hash[pro]
        
      }
    )
  }
 
   GetSelectedItem=function(e1,lk,d1,d2)
  {
console.log(e1.Class)
var e=document.getElementById(e1)
var x=document.getElementById(lk)
var dateControl = document.getElementById(d1).value
var datecontroll = document.getElementById(d2).value
var fromdate=dateControl.replace(/-/g,",")
console.log(fromdate)
var todate=datecontroll.replace(/-/g,",")
console.log(todate)
var dateControll= document.getElementById(d2).value

      var strSel = "The Value is: " + e.options[e.selectedIndex].value + " and text is: " + x.options[x.selectedIndex].value+dateControl+dateControll;
     var a=0;
     var b=0
      var c=0;
      var hash={};
      var hash1={};
      var count=0;
      var absent=0;
      var studentcount=0;
       var url="http://10.10.5.42:5000/filter"+"/"+x.options[x.selectedIndex].value+"/"+e.options[e.selectedIndex].value+"/"+fromdate+"/"+todate
       ;
var url2="http://10.10.5.42:5000/filter"+"/"+x.options[x.selectedIndex].value+"/"+e.options[e.selectedIndex].value
       this.http.get(url2).subscribe(
        (res:Response) =>{
          this.class123=res.json();  
          var date=this.class123
          console.log(date)
          for(var i in date)
          {
            console.log(date[i].studentid)
            studentcount++;
           
          }console.log(studentcount)
}


       )
     
       this.http.get(url).subscribe (
         (res:Response) =>{
           this.class22=res.json();
            // var classes=this.class[0].classname;
            var data = this.class22;
                // console.log("check on" +JSON.stringify(data))
                console.log(data)
                var records=data.length
                console.log(records)
               var h;
                for(var j in data){
            for(var i in data[j].data)

            {
              
              console.log(i)
              var id = data[j].data[i];
             // var date=data[0].date.created.getTimestamp()
             var date=data[j].date
console.log(date)
 
              console.log(id)
               
              /* if(data[j].data[i].status=="Absent")
               absent++;*/
               this.ss.push(id)
               this.count1.push(count)
             
         }
        }var list=this.ss
        console.log(list)
      
       
       for(var i in list){
        var id = list[i].stid;
        if(list[i].status=="Present")
        {
          if(hash[id])
          { 
            var look=parseInt(hash[id]);
            look++;
            hash[id]=look;
            console.log(look)
          }
          else{
            hash[id]=1      
            console.log(hash[id]+"  : "+id)
            }
        
        }
      }  
        console.log(hash)
       
       var v=Object.values(hash)
       for(var k in v){
       var ar=Object.keys(hash)

       
       var sr=ar[k]
       console.log(sr)





       var z=v[k]
        console.log(z)
        var pp=(z/records)*100
        var p=parseFloat(pp).toFixed(1)
        console.log(p)
         this.ku.push({stid:sr,per:p})
       // this.ku.push(v[k])
       console.log(this.ku)
       }      

      
      
       
       for(var i in list){
        var id = list[i].stid;
        if(list[i].status=="Present")
       {count++
       }
       
        if(list[i].status=="Absent"){
          absent++}
          
        }
       console.log(a)
       console.log(records)
       var presentper=(a/records)*100
       console.log(presentper)
       this.p=presentper
       console.log(this.p)
       var absentper=100-presentper;
       console.log(absentper)
     var pievalues=[{"data":[count,absent]}]
     this.pieChartData = pievalues as any [];	
     console.log(this.pieChartData)
     // FILL THE CHART ARRAY WITH DATA.
     this.id=count
       }
       )   
  }

 /* fetchsubjects=function(values) {
   
var hash={};
 var count=0;
 var absent=0;
  var url="http://localhost:5000/filter"+"/"+values.Class+"/"+values.Section;

  this.http.get(url).subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;
           // console.log("check on" +JSON.stringify(data))
       for(var i in data[0].data[i])
       {console.log(i)
         
          if(data[0].data[i].status=="Present")
          count++;
          if(data[0].data[i].status=="Absent")
          absent++;
        
    }
  console.log("present "+count)
  console.log("Absent"+absent)
var pievalues=[{"data":[count,absent,0]}]
this.pieChartData = pievalues as any [];	 // FILL THE CHART ARRAY WITH DATA.
this.id=count
  }
  )       
  
}*/

  ngOnInit() { this.fetchclass();
    this.fetchdate();
   /* var hash={};

    var urll="http://localhost:5000/attendanceget"
 
    this.http.get(urll).subscribe (
      (res:Response) =>{
        this.ss=res.json();

         // var classes=this.class[0].classname;
         var data = this.ss;
  
         for(var i in data[0].data)
         {
              var id = data[0].data[i];
              console.log(id)
         
           this.ss.push(id)
         }
         }
        )*/
    
        


  }


/*
var count=0;
for(var i=0i<json.systems.length;i++){
  if(json.systems[i].active){
    count++;
  }*/
}

