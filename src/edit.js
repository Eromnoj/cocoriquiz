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

export default function Edit({ attributes, setAttributes }) {

	return (
		<>
		<BlockControls>
				<ElevationToggle attributes={attributes} setAttributes={setAttributes} />
				<FillAnswerToggle attributes={attributes} setAttributes={setAttributes} />
				<CategoryDropDown attributes={attributes} setAttributes={setAttributes} />
				<DifficultyDropDown attributes={attributes} setAttributes={setAttributes} />
			</BlockControls>

			<div {...useBlockProps()}>
					<div className={"cocoriquiz-container " + (attributes.elevation ? "cocoriquiz-shadow" : "")}>
						<div className="cocoriquiz-question">
							De quelle couleur est le cheval blanc d'Henry IV ?
						</div>
						<div className="cocoriquiz-answers">

							<div className={"cocoriquiz-unique-answer " + (attributes.fill ? "good-fill" : "good-border")}>Rouge</div>
							<div className={"cocoriquiz-unique-answer " + (attributes.fill ? "bad-fill" : "bad-border")}>Blanc</div>
							<div className="cocoriquiz-unique-answer">Crème</div>
							<div className="cocoriquiz-unique-answer">La réponse D</div>

						</div>
						<div className="signature">Powered with <a href="https://quizzapi.jomoreschi.fr/">Cocoriquiz</a></div>
					</div>
			</div>
		</>
	);
}
