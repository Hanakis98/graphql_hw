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

    constructor(props){
        super(props);
        this.state={}
    }

    componentWillMount(){

    }

    updateState(e,attribute,isNumber){
        this.state[attribute]= isNumber ?parseInt(e.target.value):e.target.value;
        this.setState({})

    }
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


                                        <div className="row">
                                        

                                       
                                                                                 
                                          


                                            <div className="col-sm-7 sideContainer">
                                            <div className="side" >
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value), background: background.value, borderColor: borderColor.value, borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value), padding: parseInt(padding.value), margin: parseInt(margin.value) } });
                                             


                                            }}>
                                                <div className="form-group">
                                                <div>

                                                    <div className="row">

                                                    <label htmlFor="text">Text:</label>
                                                    <input type="text" className="f" name="text" style={{width:"50px",height:"16pt"}}  ref={node => {
                                                        text = node;
                                                    }}  placeholder="Text"  defaultValue={data.logo.text} />

                                                        </div>
                                                </div>
                                                </div>


                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">

                                                    <label htmlFor="color">Color:</label>
                                                    <input type="color" className="f" name="color" onChange={ e => {this.updateState(e, "color", false) } } style={{width:"50px",height:"16pt"}}style={{padding:"0px",width:"20px",height:"20pt"}} ref={node => {
                                                        color = node;
                                                    }} placeholder="Color" defaultValue={data.logo.color} />
                                                </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">

                                                    <label htmlFor="background">Background:</label>
                                                    <input type="color" className="f" name="background" onChange={ e => {this.updateState(e, "backgroundColor", false) } } style={{padding:"0px",width:"20px",height:"20pt"}}  ref={node => {
                                                        background = node;
                                                    }}  defaultValue={data.logo.background} />
                                                </div>
                                                </div>
                                                </div>



                                                <div className="form-group">
                                                <div className="col s7">
                                                <div className="row">

                                                    <label htmlFor="fontSize">Font Size: </label>
                                                    <input type="text"  className="f" name="fontSize" onChange={ e => {this.updateState(e, "fontSize", true) } }style={{width:"50px",height:"16pt"}} ref={node => {
                                                        fontSize = node;
                                                    }} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                </div>
                                                </div>
                                                </div>



                                                <div className="form-group">
                                                <div className="col s7">
                                                <div className="row">

                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input type="color" className="f" name="borderColor" onChange={ e => {this.updateState(e, "borderColor", false) } } style={{padding:"0px",width:"20px",height:"20pt"}} ref={node => {
                                                        borderColor = node;
                                                    }}  defaultValue={data.logo.borderColor} />
                                                </div>
                                                </div>
                                                </div>
                                                
                                               

                                                <div className="form-group">
                                                <div className="col s7">
                                                <div className="row">

                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input type= "range" className="f" name="borderRadius" onChange={ e => {this.updateState(e, "borderRadius", true) } } style={{width:"50px",height:"16pt"}} ref={node => {
                                                        borderRadius = node;
                                                        
                                                    }}  defaultValue={data.logo.borderRadius} min = "0" max = "10" />
                                                </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">

                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input type="text" className="f" name="borderWidth" onChange={ e => {this.updateState(e, "borderWidth", true) } } style={{width:"50px",height:"16pt"}} ref={node => {
                                                        borderWidth = node;
                                                    }}  defaultValue={data.logo.borderWidth} />
                                                </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">
                                                    <label htmlFor="margin">Margin:</label>
                                                    <input type="text" className="f" name="margin" onChange={ e => {this.updateState(e, "margin", true) } } style={{width:"50px",height:"16pt"}} ref={node => {
                                                        margin = node;
                                                    }}  defaultValue={data.logo.margin} />
                                                </div>
                                                </div>
                                                </div>


                                                <div className="form-group">
                                                <div className="col s7">

                                                <div className="row">
                                                    <label htmlFor="borderWidth">Padding: </label>
                                                    <input type="range" className="f" name="padding" onChange={ e => {this.updateState(e, "padding", true) } } style={{width:"50px",height:"16pt"}}  ref={node => {
                                                        padding = node;
       
                                                    }} defaultValue={data.logo.padding} />

                                                </div>
                                                <button type="submit" className="btn btn-success" style={{display:"inline-block"}}>Submit</button>

                                                </div>
                                                </div>
                                                </form>

                                                </div>
                                                </div> 
                                                


                                             <div className="col-sm-5 logoContainer">
                                                <div id=" logo" style={{
                                               color: this.state.color || data.logo.color, 
                                                    borderStyle:"solid" , 
                                                    background : (this.state.backgroundColor || data.logo.background), 
                                                    margin: ( this.state.margin || data.logo.margin) +5 + "px",
                                                     padding: (this.state.padding || data.logo.padding) + "px",
                                                      borderColor: (this.state.borderColor || data.logo.borderColor) , 
                                                      fontSize: (this.state.fontSize ||  data.logo.fontSize) + "px" , 
                                                      borderWidth: (this.state.borderWidth || data.logo.borderWidth) + "px" , 
                                                       borderRadius:  ( this.state.borderRadius ||   data.logo.borderRadius )+ "px"}}>{data.logo.text||this.state.text}
                                                       </div>
                                                       </div>

                                                       
                                               


                                              
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