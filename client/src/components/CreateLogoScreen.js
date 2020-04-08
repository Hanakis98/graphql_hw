import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $background: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!
        ) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            background: $background,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            padding: $padding,
            margin: $margin
            ) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {

    render() {
        let text, color, fontSize, background,borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home</Link></h4>
                                <h3 className="panel-title">
                                    Create Logo
                            </h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    if(text.value.trim().length === 0){
                                        alert("You must enter text to create this logo.")
                                        console.log("Could not create logo -- user didn't enter text");
                                        return false;
                                    }
                                    addLogo({ variables: { text: text.value, 
                                        color: color.value, 
                                        fontSize: parseInt(fontSize.value),
                                         background: background.value,
                                          borderColor: borderColor.value, 
                                          borderRadius: parseInt(borderRadius.value), 
                                          borderWidth: parseInt(borderWidth.value), 
                                          padding: parseInt(padding.value), 
                                          margin: parseInt(margin.value) } });
                                    text.value = "";
                                    color.value = "";
                                    fontSize.value = "";
                                    background.value = "";
                                    borderColor.value = "";
                                    borderRadius.value = "";
                                    borderWidth.value = "";
                                    padding.value = "";
                                    margin.value = "";

                                }}>
                                   <div className="form-group">
                                                    <label htmlFor="text">Text:</label>
                                                    <input type="text" className="form-control" name="text" ref={node => {
                                                        text = node;
                                                    }} placeholder="Text"  />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="color">Color:</label>
                                                    <input type="color" className="form-control" name="color" style={{width:"50px"}} ref={node => {
                                                        color = node;
                                                    }} placeholder="Color" />
                                                </div>
           
                                                <div className="form-group">
                                                    <label htmlFor="background">Background:</label>
                                                    <input type="color" className="form-control" name="background" ref={node => {
                                                        background = node;
                                                    }}  defaultValue="#FFFFFF" />
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="fontSize">Font Size:</label>
                                                    <input type="text" min="10" max="80"  className="form-control" name="fontSize" ref={node => {
                                                        fontSize = node;
                                                    }} defaultValue="12" />
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input type="color" className="form-control" name="borderColor" ref={node => {
                                                        borderColor = node;
                                                    }}  defaultValue="#FFFFFF" />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input type="text" className="form-control" name="borderRadius" ref={node => {
                                                        borderRadius = node;
                                                    }}  defaultValue="0" />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input type="text"  className="form-control" name="borderWidth" ref={node => {
                                                        borderWidth = node;
                                                    }}  defaultValue="0" />
                                                </div>
                    
                                                <div className="form-group">
                                                    <label htmlFor="margin">Margin:</label>
                                                    <input type="text"  className="form-control" name="margin" ref={node => {
                                                        margin = node;
                                                    }}  defaultValue="0" />
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Padding:</label>
                                                    <input type="text" className="form-control" name="padding" ref={node => {
                                                        padding = node;
                                                    }}  defaultValue="0"/>
                                                </div>

                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;