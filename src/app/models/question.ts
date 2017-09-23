export class Question {
  constructor(public id:string, public skill_id:number, public difficulty_id:number, public user_id:number, public question:string, public question_image:string, public answer0:string, public answer0_image:string, public answer1:string, public answer1_image:string, public answer2:string, public answer2_image:string, public answer3:string, public answer3_image:string, public correct_answer:number, public status_id:number, public source:string, public type_id:number, public calculator) {
  }
}
