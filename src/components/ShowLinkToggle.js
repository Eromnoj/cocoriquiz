import {
	ToggleControl
} from '@wordpress/components'


const ShowLinkToggle = ({attributes, setAttributes}) => {
  return (
    <ToggleControl
    label="Montrer le lien externe vers l'API"
    checked={attributes.showLink}
    onChange={()=> setAttributes({showLink: !attributes.showLink})}
    className='menu-icon-simplequizblock'
    />
  )
}

export default ShowLinkToggle