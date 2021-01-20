import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberMenuIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
            <FiberMenuIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                 <p>{subtitle}</p>
            </div>
        </div>
        )
    }

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('OLUWAPELUMI is here', 'Top new project')}
            {newsArticle('OLUWAPELUMI is here', 'Top new project')}
            {newsArticle('OLUWAPELUMI is here', 'Top new project')}
            {newsArticle('OLUWAPELUMI is here', 'Top new project')}
            {newsArticle('OLUWAPELUMI is here', 'Top new project')}
           
        </div>
    )
}

export default Widgets
