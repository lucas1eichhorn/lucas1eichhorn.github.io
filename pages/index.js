import Layout from '../components/Layout'
import {skills,learning,experiences,projects} from '../profile'
import Skill from '../components/Skill';
import Link from 'next/link';
const Index = () => (
    <Layout>
        {/**Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="images/lucas-profile.jpg" alt="Lucas Eichhorn profile picture"  className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Lucas Eichhorn</h1>
                            <h3>FullStack Developer</h3>
                            <p>
                                Lorem ipsum smdf smfd dsjdfj dolor siay met setInterval(() = 1
                                Lorem ipsum smdf smfd dsjdfj dolor siay met setInterval(() = 1
                                    
                                , asd);
                                , asd);v d fdfdfdf
                                <a href="/hireme"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/**Second section */}
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                        skills.map((skill,i)=>(<Skill skill={skill} key={i}/>))
                        }
                        
                    </div>
                </div>
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Learning</h1>
                        {
                        learning.map((skill,i)=>(<Skill skill={skill} key={i}/>))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {experiences.map(({company,skill,from,to},index)=>(
                                <li key={index}>
                                    <h3>{company}</h3>
                                    <h5>{skill}</h5>
                                    <p>{from}-{to?to:'Now'}</p>
                                </li>
                            ))}
                            
                        </ul>
                        <Link href="/experiences">
                        <a className="btn btn-light">Know More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
   {/**Portfolio */}
   <div className="row">
       <div className="col-md-12">
           <div className="card card-body bg-dark">
               <div className="row">
                   <div className="col-md-12">
                       <h1 className="text-center text-light">Portfolio</h1>
                   </div>
                   {
                   projects.map(({name,description,image},index)=>(
                    <div className="col-md-4 p-2" key={index}>
                        <div className="card h-100">
                            <div className="overflow">
                                <img src={`images/${image}`} alt={name} className="card-img-top" />
                            </div>
                            <div className="card-body"> 
                                <h3>{name}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                   ))
                   }
                  
               </div>
               <div className="text-center mt-4">
           <Link href="/portfolio">
               <a className="btn btn-outline-light">More projects</a>
           </Link>
       </div>
           </div>
          
       </div>
   </div>
    </Layout>
)

export default Index;