import React, {Component} from 'react';

class FormInput extends Component{

    state ={
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }

    onChangeHandler = (event) =>{   
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleCheckbox = (event) =>{
        this.setState({
            agree: event.target.checked
        })
    }
    handleCheckboxSkills = (event) =>{
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }
        else{
            const skills = this.state.skills.filter((skills) => skills !== event.target.value);
            this.setState({skills});
        }
       
    }

    render(){
        const {name, country, bio, birthday, agree, skills} = this.state;
        return(
            <div className="container">
                <h2 className="text-warning text-center">React Form Input Control</h2>
                <form>
                    <div className="form-group">
                        <input value={name}  className="form-control" type="text" name="name" onChange={this.onChangeHandler} />
                    </div>

                    <div className="form-group">
                        <select value={country} className="form-control" type="text" name="country" onChange={this.onChangeHandler} >
                            <option value="">Bangladesh</option>
                            <option value="">India</option>
                            <option value="">Pakistan</option>
                            <option value="">Turkey</option>
                            <option value="">Canada</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <textarea value={bio}  className="form-control" name="bio" onChange={this.onChangeHandler} col="30" row="50"></textarea>
                    </div>

                    <div className="form-group">
                        <input value={birthday} className="form-control" type="date" name="birthday" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Male" onChange={this.onChangeHandler} /> Male
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Female" onChange={this.onChangeHandler} /> Female
                        </div>
                    </div>
                    
                    <div className="form-check">
                        <input checked={agree} className="form-check-input" type="checkbox" name="agree" onChange={this.handleCheckbox} />I agree with term and condition
                    </div>

                    <div className="form-group">
                        <label>Skills: </label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  name="skills" value="java" checked={skills.includes('java')}  onChange={this.handleCheckboxSkills} />Java
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  name="skills" value="python" checked={skills.includes('python')}  onChange={this.handleCheckboxSkills} />Python
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  name="skills" value="php" checked={skills.includes('php')}  onChange={this.handleCheckboxSkills} />Php
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  name="skills" value="javascript" checked={skills.includes('javascript')}  onChange={this.handleCheckboxSkills} />Javascript
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  name="skills" value="kotlin" checked={skills.includes('kotlin')}  onChange={this.handleCheckboxSkills} />Kotlin
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  name="skills" value="laravel" checked={skills.includes('laravel')}  onChange={this.handleCheckboxSkills} />Laravel
                        </div>
                    </div>
                <button type="button" className="btn btn-sm btn-info" onClick={()=> console.log(this.state)} > Show Data</button>
                </form>
            </div>
        );
    }

}

export default FormInput;


