/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, BlockControls } from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

/**
 * Custum components import for Blocks Controls
 */

import ElevationToggle from './components/ElevationToggle';
import FillAnswerToggle from './components/FillAnswerToggle';
import CategoryDropDown from './components/CategoryDropDown';
import DifficultyDropDown from './components/DifficultyDropDown';
import ShowLinkToggle from './components/ShowLinkToggle';

export default function Edit({ attributes, setAttributes }) {

	return (
		<>
			<BlockControls>
				<ElevationToggle attributes={attributes} setAttributes={setAttributes} />
				<FillAnswerToggle attributes={attributes} setAttributes={setAttributes} />
				<CategoryDropDown attributes={attributes} setAttributes={setAttributes} />
				<DifficultyDropDown attributes={attributes} setAttributes={setAttributes} />
				<ShowLinkToggle attributes={attributes} setAttributes={setAttributes} />

			</BlockControls>

			<div {...useBlockProps()}>
				<div className={"simplequizblock-container " + (attributes.elevation ? "simplequizblock-shadow" : "")}>
					<div className="simplequizblock-question">
						De quelle couleur est le cheval blanc d'Henry IV ?
					</div>
					<div className="simplequizblock-answers">

						<div className={"simplequizblock-unique-answer " + (attributes.fill ? "simplequizblock-good-fill" : "simplequizblock-good-border")}>Rouge</div>
						<div className={"simplequizblock-unique-answer " + (attributes.fill ? "simplequizblock-bad-fill" : "simplequizblock-bad-border")}>Blanc</div>
						<div className="simplequizblock-unique-answer">Crème</div>
						<div className="simplequizblock-unique-answer">La réponse D</div>

					</div>
					<div className="simplequizblock-result">
						<div className='simplequizblock-good-answer'>
							'Félicitation ! 🥳'
						</div>
						{attributes.showLink ?
							<div className="simplequizblock-signature"><p class="simplequizblock-signature-link">Proposez vos questions</p></div>
							: null
						}
					</div>
				</div>
			</div>
		</>
	);
}
