import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            background
            borderColor
            borderRadius
            borderWidth
            padding
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
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
            updateLogo(
                id: $id,
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
                    lastUpdate
                }
        }
`;

class EditLogoScreen extends Component {

    render() {
        let text, color, fontSize, background,borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">Home</Link></h4>
                                            <h3 className="panel-title">
                                                Edit Logo
                                        </h3>
                                        </div>
                                        <div className="panel-body">   
                                                                                 
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value), background: background.value, borderColor: borderColor.value, borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value), padding: parseInt(padding.value), margin: parseInt(margin.value) } });
                                              /*  text.value = "";
                                                color.value = "";
                                                fontSize.value = "";
                                                background.value = "";
                                                borderColor.value = "";
                                                borderRadius.value = "";
                                                borderWidth.value = "";
                                                padding.value = "";
                                                margin.value = "";
                                                */


                                            }}>

                                            <div className="side">
                                                <div className="form-group">
                                                <div className="col s7">

                                                    <div className="row">

                                                    <label htmlFor="text">Text:</label>
                                                    <input type="text" className="form-control" name="text" style={{width:"50px",height:"16pt"}}  ref={node => {
                                                        text = node;
                                                    }}  placeholder="Text"  defaultValue={data.logo.text} />

                                                        </div>
                                                </div>
                                                </div>


                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">

                                                    <label htmlFor="color">Color:</label>
                                                    <input type="color" className="form-control" name="color" style={{padding:"0px",width:"20px",height:"20pt"}} ref={node => {
                                                        color = node;
                                                    }} placeholder="Color" defaultValue={data.logo.color} />
                                                </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">

                                                    <label htmlFor="background">Background:</label>
                                                    <input type="color" className="form-control" name="background" style={{padding:"0px",width:"20px",height:"20pt"}}  ref={node => {
                                                        background = node;
                                                    }}  defaultValue={data.logo.background} />
                                                </div>
                                                </div>
                                                </div>



                                                <div className="form-group">
                                                <div className="col s7">
                                                <div className="row">

                                                    <label htmlFor="fontSize">Font Size: </label>
                                                    <input type="text" className="form-control" name="fontSize" style={{width:"50px",height:"16pt"}} ref={node => {
                                                        fontSize = node;
                                                    }} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                </div>
                                                </div>
                                                </div>



                                                <div className="form-group">
                                                <div className="col s7">
                                                <div className="row">

                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input type="color" className="form-control" name="borderColor" style={{padding:"0px",width:"20px",height:"20pt"}} ref={node => {
                                                        borderColor = node;
                                                    }}  defaultValue={data.logo.borderColor} />
                                                </div>
                                                </div>
                                                </div>


                                                <div className="form-group">
                                                <div className="col s7">
                                                <div className="row">

                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input type="text" className="form-control" name="borderRadius" style={{width:"50px",height:"16pt"}} ref={node => {
                                                        borderRadius = node;
                                                        
                                                    }}  defaultValue={data.logo.borderRadius} />
                                                </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">

                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input type="text" className="form-control" name="borderWidth" style={{width:"50px",height:"16pt"}} ref={node => {
                                                        borderWidth = node;
                                                    }}  defaultValue={data.logo.borderWidth} />
                                                </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">
                                                    <label htmlFor="margin">Margin:</label>
                                                    <input type="text" className="form-control" name="margin" style={{width:"50px",height:"16pt"}} ref={node => {
                                                        margin = node;
                                                    }}  defaultValue={data.logo.margin} />
                                                </div>
                                                </div>
                                                </div>


                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">
                                                    <label htmlFor="borderWidth">Padding: </label>
                                                    <input type="text" className="form-control" name="padding"style={{width:"50px",height:"16pt"}}  ref={node => {
                                                        padding = node;
       
                                                    }} defaultValue={data.logo.padding} />
                                                </div>
                                                </div>
                                                </div>
                                                </div>

                                                  

                                                
                                                 

                                                <button type="submit" className="btn btn-success">Submit</button>
                                               <br></br>
                                                <label id="logo" style={{color: data.logo.color, borderStyle:"solid" , backgroundColor : data.logo.backgroundColor, padding:data.logo.padding , borderColor:data.logo.borderColor , fontSize:data.logo.fontSize , borderWidth: data.logo.borderWidth ,  borderRadius:data.logo.borderRadius}} >logo</label>

                                            </form>
                                            {loading && <p>Loading...</p>}
                                            {error && <p>Error :( Please try again</p>}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;