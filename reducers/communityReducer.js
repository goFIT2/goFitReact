import { CREATE_COMMUNITY } from '../actions/ActionConstants'
import { _ } from 'lodash'

const defaultState = {
    name: '#goFITgang',
    icon: require('../assets/images/social.png'),
    members: ['Bryce', 'Olivia', 'Chris', 'CJ'],
    newsfeed: [
        {key:0, friend:'CJ', text:'Wow I just benched 7000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'3h', likes:['Chris'], attachment:'CJ completed bench press today.'},
        {key:1, friend:'Olivia', text:'I plan on going to the gym later today. Anyone wanna come?', community:'#goFITgang', time:'5h', likes:['Bryce'], attachment:''},
        {key:2, friend:'Chris', text:'TBH this is way better than SoulCycle.', community:'#goFITgang', time:'20h', likes:['Bryce', 'Olivia'], attachment:'Chris completed outdoor cycling today.'},
        {key:3, friend:'Bryce', text:'', community:'#goFITgang', time:'1d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
        {key:4, friend:'CJ', text:'Wow I just benched 6000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'2d', likes:['Chris'], attachment:'CJ completed bench press today.'},
        {key:5, friend:'Bryce', text:'Olivia I saw you running today. Keep it up!', community:'#goFITgang', time:'2d', likes:['Olivia'], attachment:''},
        {key:6, friend:'Olivia', text:'', community:'#goFITgang', time:'2d', likes:[], attachment:'Olivia completed running today.'},
        {key:7, friend:'Chris', text:'Does anyone want to do SoulCycle with me and Olivia tonight?', community:'#goFITgang', time:'3d', likes:['Olivia'], attachment:''},
        {key:8, friend:'Chris', text:'', community:'#goFITgang', time:'3d', likes:['Olivia'], attachment:'Chris completed barbell bench press, chin ups today.'},
        {key:9, friend:'Bryce', text:'', community:'#goFITgang', time:'3d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
        {key:10, friend:'CJ', text:'In shocking news, I just got asked to go out on a data... that\'s a first.', community:'#goFITgang', time:'4d', likes:['Chris'], attachment:''},
        {key:11, friend:'CJ', text:'Wow I just benched 5000 pounds. That\'s a new record for me.', community:'#goFITgang', time:'4d', likes:['Bryce', 'Olivia', 'Chris'], attachment:'CJ completed bench press today.'},
        {key:12, friend:'Bryce', text:'', community:'#goFITgang', time:'4d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
        {key:13, friend:'Chris', text:'I\'m excited to work out with you all!', community:'#goFITgang', time:'4d', likes:['Bryce', 'Olivia', 'CJ'], attachment:''},
        {key:14, friend:'Olivia', text:'Hi Chris and CJ!', community:'#goFITgang', time:'4d', likes:['CJ', 'Chris'], attachment:''},
        {key:15, friend:'Olivia', text:'', community:'#goFITgang', time:'4d', likes:['Bryce', 'CJ', 'Chris'], attachment:'Olivia added CJ, Chris to #goFITgang.'},
        {key:16, friend:'Olivia', text:'', community:'#goFITgang', time:'5d', likes:['Bryce'], attachment:'Olivia completed running, rowing today.'},
        {key:17, friend:'Bryce', text:'', community:'#goFITgang', time:'5d', likes:['Olivia'], attachment:'Bryce completed bicep curls today.'},
        {key:18, friend:'Olivia', text:'Yay time to get fit again!', community:'#goFITgang', time:'5d', likes:['Bryce'], attachment: ''},
        {key:19, friend:'Bryce', text:'', community:'#goFITgang', time:'5d', likes:['Olivia'], attachment:'Bryce created the #goFITgang community with Olivia.'},
        {key:20, friend:'Bryce', text:'', community:'bryceps', time:'5d', likes:[], attachment:'Bryce created the bryceps community with Olivia.'},
        {key:21, friend:'Olivia', text:'', community:'oliftitup', time:'5d', likes:['Olivia'], attachment:'Olivia created the oliftitup community with Chris, CJ.'},
        {key:22, friend:'Olivia', text:'', community:'TEAMFITLIT', time:'5d', likes:[], attachment:'Olivia created the TEAMFITLIT community with Bryce.'},
        {key:23, friend:'Bryce', text:'', community:'goFUT', time:'5d', likes:[], attachment:'Bryce created the goFUT community with Olivia.'},
    ]
}

const communityReducer = (state = defaultState, action) => {
    switch (action.type) {
      case CREATE_COMMUNITY:
            const { exercise, newSet } = action 
            const newState = _.map(state, (item) => {
                if (item.index === exercise.index){
                    item.data.push(newSet)
                }
                return item
            })
            return newState
       default:
            return state
    }
  }
  
  export default progressReducer