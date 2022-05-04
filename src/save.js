/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps, InspectorControls, ColorPalette } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, receipenamecolor, mediaURL, mediaID, ingredients, subtitlecolor, subcontentcolor, instructions, imagestyle, receipe_category, preptime, cooktime, additional, totaltime, servings, datayield, nutrition_facts,message},
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>


			<RichText.Content tagName='h4' value={receipe_category} />

			<RichText.Content
				tagName='p'
				style={{ color: subcontentcolor }}
				value={preptime}
			/>

			<RichText.Content
				tagName='p'
				style={{ color: subcontentcolor }}
				value={cooktime}
			/>

			<RichText.Content
				tagName='p'
				style={{ color: subcontentcolor }}
				value={additional}
			/>

			<RichText.Content
				tagName='p'
				style={{ color: subcontentcolor }}
				value={totaltime}
			/>
			<RichText.Content
				tagName='p'
				style={{ color: subcontentcolor }}
				value={servings}
			/>

			<RichText.Content
				tagName='p'
				style={{ color: subcontentcolor }}
				value={datayield}
			/>


			<RichText.Content style={{ color: receipenamecolor }} tagName='h2' value={title} />

			{mediaURL && (
				<img
					className={imagestyle}
					src={mediaURL}
					alt={__('Recipe Image')}
				/>
			)}

			<h3 style={{ color: subtitlecolor }}>{__('Ingredients')}</h3>
			<RichText.Content
				tagName='ul'
				className='ingredients'
				style={{ color: subcontentcolor }}
				value={ingredients}
			/>

			<h3 style={{ color: subtitlecolor }}>{__('Instructions')}</h3>
			<RichText.Content
				tagName='div'
				className='steps'
				style={{ color: subcontentcolor }}
				value={instructions}
			/>

			<h3 style={{ color: subtitlecolor }}>{__('Nutrition Facts')}</h3>
			<RichText.Content
				tagName='div'
				className='nutrition'
				style={{ color: subcontentcolor }}
				value={nutrition_facts}
			/>
			
			<h3 style={{ color: subtitlecolor }}>{__('Steps :')}</h3>

			<RichText.Content
				tagName='ul'
				value={message}
				style={{ color: subcontentcolor }}
				className='steps'
			/>

		</div>
	);
};

export default Save;
