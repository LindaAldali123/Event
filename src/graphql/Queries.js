import axios from 'axios';

async function getdata(query) {
	try {
		return await axios({
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			url: 'https://auth-islend-800.herokuapp.com/graphql',
			data: JSON.stringify({
				query: query,
			}),
		});
	} catch (error) {
		console.error(error);
	}
}

async function users() {
	var query = `query {
                users (last: 100){
                edges {
                        node {
                            id,
                            username,
                            email,
                            isActive,
                            archived,
                            verified,
                            secondaryEmail
                            }
                         }
                        }
                }
                `;
	var result = await getdata(query);
	return result.data.data.users.edges;
}

async function register(email, username, password1, password2) {
	var query = `
            mutation {
                register(
                email: "${email}",
                username: "${username}",
                password1: "${password1}",
                password2: "${password2}",
                ) {
                success,
                errors,
                token,
                refreshToken
                }
            }
           `;
	var result1 = await getdata(query);
	return result1.data;
}
async function login(username, password) {
	var query = `
    mutation{
        tokenAuth(username: "${username}",password: "${password}",)
        {
            token
            refreshToken
        }
    }`;
	var result2 = await getdata(query);
	return result2.data;
}
async function events(username, num) {
	var query = `
    query {
        allEvent (username:"${username}",last: ${num}){
         id,
        author{
          username
        },
        tags{
          name
        },
        title,
        subtitle,
        body,
        price,
        dateCreated,
        dateEvent,
        published,
        status,
        FollowersCount,
        FollowStat,
        RegisteredCount,
        image,
        address,
        Location,
        likesCount,
        likes{
            username
        },
        likeStat
        }
      }`;
	var result3 = await getdata(query);
	return result3.data;
}
async function eventsorg(user, nam) {
	var query = `
    query {
        OrganizerEvents (userlogin: "${user}",username: "${nam}"){
         id,
        author{
          username
        },
        tags{
          name
        },
        title,
        subtitle,
        body,
        price,
        dateCreated,
        dateEvent,
        published,
        status,
        FollowersCount,
        FollowStat,
        RegisteredCount,
        image,
        address,
        Location,
        likesCount,
        likes{
            username
        },
        likeStat
        }
      }`;
	var result4 = await getdata(query);
	return result4.data;
}
async function likeevent(uname, number) {
	var query = `
    query {
        setLikes (username: "${uname}",eventID:${number}){
         id,
        author{
          username
        },
        tags{
          name
        },
        title,
        subtitle,
        body,
        price,
        dateCreated,
        dateEvent,
        published,
        status,
        FollowersCount,
        FollowStat,
        RegisteredCount,
        image,
        address,
        Location,
        likesCount,
        likes{
            username
        },
        likeStat
        }
      }`;
	var result5 = await getdata(query);
	return result5.data;
}
async function followe(userlog, usernam) {
	var query = `
    query{
        setFollowe(userlogin:"${userlog}",username:"${usernam}"){
          id,
          Follower{
            username
          },
          FollowStat,
          FollowerCount
        }
      }`;
	var result6 = await getdata(query);
	return result6.data;
}
async function follcount(userna, numb) {
	var query = `
    query {
        event (username:"${userna}",eventId:${numb} ){
         id,
        author{
          username
        },
        tags{
          name
        },
        title,
        subtitle,
        body,
        price,
        dateCreated,
        dateEvent,
        published,
        status,
        RegisteredCount,
        image,
        address,
        Location,
       likesCount,
    likes{
      username
    },
    likeStat,
    Followers{
      username
    },
        FollowStat,
        FollowersCount,
        }
      }`;
	var result7 = await getdata(query);
	return result7.data;
}
async function createvent(author, tit, sub, bod, meta, price, tag, start, end, people, etype, address, files) {
	var query = `
    mutation createMutation{
        createEvent(eventData:{
          author:"${author}",
          title:"${tit}",
          subtitle:"${sub}",
          body:"${bod}",
          metaDescription:"${meta}",
          price:${price},
          published:true,
          tagsString:"${tag}",
          eventStart:"${start}",
          eventEnd:"${end}",
          countpeople:${people},
          eventType:"${etype}",
          image:"${files}",
          address:"${address}",

          Location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.875965270987!2d46.67227008499973!3d24.731138184115128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d4d2f832a77%3A0x88aba85942837e42!2z2LPZhtiq2LEg2KjZiNmK2YbYqtiMINi32LHZitmCINin2YTZhdmE2YMg2LnYqNiv2KfZhNmE2YfYjCDYp9mE2YXZhNmDINmB2YfYr9iMINin2YTYsdmK2KfYtiAxMjI3MdiMINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1627674047199!5m2!1sar!2seg"
        }){
          event{
            title,
            author{
              username
            },
            FollowersCount
          }
        }
      }`;
	var result8 = await getdata(query);
	return result8.data;
}
async function eventnotoken(nu) {
	var query = `
  query {
       allEventnotoken(last:${nu}){
       id,
      author{
        username
      },
      tags{
        name
      },
      title,
      subtitle,
      body,
      price,
      dateCreated,
      dateEvent,
      published,
      status,
      FollowersCount,
      FollowStat,
      RegisteredCount,
      image,
      address,
      Location
      }
    }`;
	var result9 = await getdata(query);
	return result9.data;
}
async function organizers(r) {
	var query = `
    query {
      famousOrganizers(list:${r}){
   id,
   image,
   firstname,
   lastname,
   cellphone,
   companyphone,
   website,
   blog,
   Address,
   Address2,
   city,
   country,
   jobtitle,
   user{
     username
   },
   FollowerCount
    }
     }
    `;
	var result10 = await getdata(query);
	return result10.data;
}
async function userupdate(user, img, fn, ln, cell, phon, webs, blog, jobt, addr1, addr2, city, country, cname) {
	var query = `
    mutation createMutation{
        updateProfile(username:"${user}",profileData:{
          image:"${img}",
          firstname:"${fn}",
          lastname:"${ln}",
          cellphone:"${cell}",
          companyphone:"${phon}",
          website:"${webs}",
          blog:"${blog}",
          jobtitle:"${jobt}",
          Address:"${addr1}",
          Address2:"${addr2}",
          city:"${city}",
          country:"${country}",
          companyName:"${cname}"
        }){
          profile{
            image,
            firstname,
            lastname,
            cellphone,
            companyphone,
            website,
            blog,
            jobtitle,
            Address,
            Address2,
            city,
            country,
            companyName,
            FollowerCount,
            user{
                email
            }
          }
        }
      }
    `;
	var result11 = await getdata(query);
	return result11.data;
}
async function getuserdata(user) {
	var query = `
    query{
        getUser(username:"${user}"){
          id,
          image,
          firstname,
          lastname,
          cellphone,
          companyphone,
          website,
          jobtitle,
          companyName,
          blog,
          Address,
          Address2,
          city,
          country,
          FollowerCount,
          user{
              email
          }
        }
      }
    `;
	var result12 = await getdata(query);
	return result12.data;
}
async function orgv(loguser) {
	var query = `
    query{
        getUser(username:"${loguser}"){
       id,
         user{
           username
         },
         image,
         jobtitle,
         firstname,
         lastname,
         cellphone,
         companyName,
         cellphone,
         website,
         blog,
         Address,
         Address2,
         city,
         country,
         FollowerCount,
         FollowStat,
         Events{
         id,
           tags{
             name
           },
           title,
           subtitle,
           body,
            author{
          username
              },
           dateCreated,
                 dateEvent,
                 price,
                 published,
                 status,
                 FollowersCount,
                 RegisteredCount,
                 image,
                 address,
                 Location,
                 likesCount,
                 likes{
                 username
                  },
                 Followers{
                   username
                 },
                 likeStat
       }
       }
       }
    `;
	var result13 = await getdata(query);
	return result13.data;
}
async function updateEvent(
	id,
	autho,
	titl,
	ima,
	subt,
	bodyy,
	metaa,
	pricee,
	tagss,
	ustart,
	uend,
	upeople,
	utype,
	uaddress
) {
	var query = ` mutation createMutation{
    UpdateEvent(eventid:${id},eventData:{
      author:"${autho}",
      title:"${titl}",
      image:"${ima}",
      subtitle:"${subt}",
      body:"${bodyy}",
      metaDescription:"${metaa}",
      price:${pricee},
      published:true,
      tagsString:"${tagss}",
      eventStart:"${ustart}",
      eventEnd:"${uend}",
      countpeople:${upeople},
      eventType:"${utype}",
      address:"${uaddress}",
      Location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.875965270987!2d46.67227008499973!3d24.731138184115128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d4d2f832a77%3A0x88aba85942837e42!2z2LPZhtiq2LEg2KjZiNmK2YbYqtiMINi32LHZitmCINin2YTZhdmE2YMg2LnYqNiv2KfZhNmE2YfYjCDYp9mE2YXZhNmDINmB2YfYr9iMINin2YTYsdmK2KfYtiAxMjI3MdiMINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1627674047199!5m2!1sar!2seg",
    }){
      event{
        title,
        author{
          username
        },
        FollowersCount
      }
    }
  } `;
	var result14 = await getdata(query);
	return result14.data;
}
async function getevent(uid, user) {
	var query = `
    query{
        event(eventId:${uid},username:"${user}"){
          id,
          author{
            username
          },
          tags{
            name
          },
          title,
          subtitle,
          body,
          dateCreated,
          dateEvent,
          price,
          published,
          metaDescription,
          eventType,
          status,
          FollowersCount,
          RegisteredCount,
          image,
          address,
          Countpeople,
          Location,
          likesCount,
          Followers{
            username
          },
          likeStat,
          FollowStat,
          FollowersCount,
          Registered{
              username
          }
        }
      }`;
	var result15 = await getdata(query);
	return result15.data;
}
async function registerpay(user, eid, tic) {
	var query = `
    query {
        registerEvent(username:"${user}",eventID:${eid},NumberTickets:${tic}){
       id,
       title,
       subtitle,
       Countpeople
     }
         }
   `;
	var result16 = await getdata(query);
	return result16.data;
}
async function getuser(stat, numberr, lastid) {
	var query = `
    query{
        getusers(state:"${stat}",count:${numberr},lastId:${lastid}){
          id,
          lastname,
          image,
          jobtitle,
          Next,
          Prev,
          user{
          id,
          username,
          isActive,
          isStaff,
          isSuperuser,
          lastLogin
          }
        }
      }
   `;
	var result17 = await getdata(query);
	return result17.data;
}
async function geteve(state, count, lastid) {
	var query = `
    query{
        dashevents(state:"${state}",count:${count},lastId:${lastid}){
          id,
          title,
          image,
          address,
          subtitle,
          Next,
          Prev,
          tags{
            name
          },
          body,
          price,
          dateCreated,
          dateEvent, 
          status,
          FollowersCount,
          FollowStat,
          address,
          Location
          author
          {
            id,
            username
          },
          Countpeople,
          RegisteredCount,
          likesCount,
          published
        }
      }
   `;
	var result18 = await getdata(query);
	return result18.data;
}
async function stopeve(id) {
	var query = `
    query{
       stopPosting(id:${id}){
         id,
         title,
         subtitle,
         image,
         address,
         author{
           username
         },
         Countpeople,
         RegisteredCount,
         likesCount,
         published
       }
      }
   `;
	var result19 = await getdata(query);
	return result19.data;
}
async function deleve(id) {
	var query = `
    query{
       deletevents(id:${id}){
        id,
        title,
        subtitle,
        image,
        address,
        author{
          username
        },
        Countpeople,
        RegisteredCount,
        likesCount,
        published 
       }
      }
   `;
	var result20 = await getdata(query);
	return result20.data;
}
async function stopuser(id) {
	var query = `
    query{
      stopUser(id:${id}){
        id,
        username,
        isActive,
        isStaff,
        isSuperuser,
        lastLogin
      }
      }
   `;
	var result21 = await getdata(query);
	return result21.data;
}
async function deleteuser(id) {
	var query = `
    query{
      deleteuser(id:${id}){
        id,
        username,
        isActive,
        isStaff,
        isSuperuser,
        lastLogin
      }
      }
   `;
	var result22 = await getdata(query);
	return result22.data;
}
export {
	users,
	register,
	login,
	events,
	eventsorg,
	likeevent,
	followe,
	follcount,
	createvent,
	eventnotoken,
	organizers,
	userupdate,
	getuserdata,
	orgv,
	updateEvent,
	getevent,
	registerpay,
	getuser,
	geteve,
	stopeve,
	deleve,
	stopuser,
	deleteuser,
};
