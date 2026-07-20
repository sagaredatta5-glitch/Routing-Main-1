import { Injectable } from '@angular/core';
import { Ires, Iuser } from '../model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
UsersDetails: Array<Iuser> = [
  {
    userName: 'Virat Kohli',
    userId: 'CR101',
    userRole: 'Batsman',
    profileDescription: 'One of the greatest modern-day batsmen known for consistency and aggressive captaincy.',
    profileImage: 'data:image/jpeg;base64,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',
    skills: ['Batting', 'Captaincy', 'Fitness', 'Fielding'],
    experienceYears: '15+ years',
    isActive: true,
    address: {
      current: {
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        zipcode: '110001'
      },
      permanent: {
        city: 'Mumbai',
        state: 'Delhi',
        country: 'India',
        zipcode: '110001'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Rohit Sharma',
    userId: 'CR102',
    userRole: 'Opening Batsman',
    profileDescription: 'Known for his elegant batting style and multiple double centuries in ODI cricket.',
    profileImage: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png',
    skills: ['Batting', 'Leadership', 'Timing', 'Strategy'],
    experienceYears: '17+ years',
    isActive: true,
    address: {
      current: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001'
      },
      permanent: {
        city: 'Nagpur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '440001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'MS Dhoni',
    userId: 'CR103',
    userRole: 'Wicket Keeper',
    profileDescription: 'Legendary captain and wicketkeeper known for his calmness and finishing abilities.',
    profileImage: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png',
    skills: ['Captaincy', 'Wicket Keeping', 'Finishing', 'Leadership'],
    experienceYears: '20+ years',
    isActive: true,
    address: {
      current: {
        city: 'Ranchi',
        state: 'Jharkhand',
        country: 'India',
        zipcode: '834001'
      },
      permanent: {
        city: 'Ranchi',
        state: 'Jharkhand',
        country: 'India',
        zipcode: '834001'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Jasprit Bumrah',
    userId: 'CR104',
    userRole: 'Fast Bowler',
    profileDescription: 'World-class fast bowler famous for his unique bowling action and deadly yorkers.',
    profileImage: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png',
    skills: ['Fast Bowling', 'Yorkers', 'Death Overs', 'Fielding'],
    experienceYears: '10+ years',
    isActive: true,
    address: {
      current: {
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
        zipcode: '380001'
      },
      permanent: {
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
        zipcode: '380001'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Hardik Pandya',
    userId: 'CR105',
    userRole: 'All Rounder',
    profileDescription: 'Dynamic all-rounder known for explosive batting and medium pace bowling.',
    profileImage: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png',
    skills: ['Batting', 'Bowling', 'Fielding', 'Leadership'],
    experienceYears: '9+ years',
    isActive: false,
    address: {
      current: {
        city: 'Vadodara',
        state: 'Gujarat',
        country: 'India',
        zipcode: '390001'
      },
      permanent: {
        city: 'Vadodara',
        state: 'Gujarat',
        country: 'India',
        zipcode: '390001'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Suryakumar Yadav',
    userId: 'CR106',
    userRole: 'Middle Order Batsman',
    profileDescription: 'One of the most innovative T20 batsmen with exceptional 360-degree stroke play.',
    profileImage: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/19.png',
    skills: ['Batting', '360 Shot Making', 'Fielding', 'Consistency'],
    experienceYears: '12+ years',
    isActive: true,
    address: {
      current: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001'
      },
      permanent: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001'
      }
    },
    isAddSame: false
  }
];
  constructor() { }

  fetchuserdata():Observable<Iuser[]>{
    return of(this.UsersDetails)
  }

  getuserById(uid:string):Observable<Iuser>{
    let userId = this.UsersDetails.find(p=>p.userId===uid)!
    return of(userId)
  }

  Addnewuser(newu:Iuser):Observable<Ires<Iuser>>{
    this.UsersDetails.unshift(newu)
    return of({
      msg:`New ${newu.userName} user Added Successfully!!!`,
      data:newu
    })
  }

  onupdateuser(uuser:Iuser):Observable<Ires<Iuser>>{
    let getindex = this.UsersDetails.findIndex(p=>p.userId===uuser.userId)
    this.UsersDetails[getindex]=uuser
    return of({
      msg:`User ${uuser.userName} is Updated Successfully!!!`,
      data:uuser
    })
  }

  removeuser(ruser:string):Observable<Ires<Iuser>>{
    let getindex = this.UsersDetails.findIndex(p=>p.userId===ruser)
    let ruse = this.UsersDetails.splice(getindex,1)
    return of({
      msg:`User ${ruse[0].userId} Removed Successfully!!!`,
      data:ruse[0]
    })

  }

}
