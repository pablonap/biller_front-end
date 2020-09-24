import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
// import * as jspdf from 'jspdf';  
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';  

import { Budget } from '../budget/budget';
import { BudgetSummaryService } from './budget-summary.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'budget-summary',
  templateUrl: './budget-summary.component.html',
})
export class BudgetSummaryComponent implements OnInit {

    public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  

  public budget: Budget = new Budget();

  constructor(private budgetSummaryService: BudgetSummaryService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadBudget()
  }

  loadBudget(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.budgetSummaryService.getBudget(id).subscribe( (budget) => this.budget = budget)
      }
    })
  }

}
