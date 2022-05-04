import { __ } from '@wordpress/i18n';
import {
	RichText, useBlockProps, AlignmentControl,
	BlockControls, InspectorControls, ColorPalette, __experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, PanelHeader, SelectControl, __experimentalUnitControl as UnitControl, CheckboxControl, __experimentalInputControl as InputControl, TextareaControl, RadioControl, TextControl } from '@wordpress/components';
import '../style.css';
import { useState } from '@wordpress/element';
import { Row, Col } from 'antd';

const Edit = (props) => {

	const {
		attributes: { align, title, subtitle, receipenamecolor, subtitlecolor, subcontentcolor, bordercolor, blockcolor, border_style, borderradiousvalue, paddingleft, paddingtop, paddingright, paddingbottom, isFirstNameChecked, isLastNameChecked, isEmailChecked, isPhonenumChecked, isMessageChecked, isAddressChecked, iswhatgender, isRecaptchaEnable, sitekey, secretkey, email_to, email_subject, colorv, gradientv, formlayout, gender_type },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeAlign = (value) => {
		setAttributes({
			align: value === undefined ? 'none' : value,
		})
	}

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeSubtitle = (value) => {
		setAttributes({ subtitle: value });
	};

	const onChangeTitleColor = (value) => {
		setAttributes({ receipenamecolor: value });
	};

	const onChangeBorderColor = (value) => {
		setAttributes({ bordercolor: value });
	}

	const onChangeBlockColor = (value) => {
		setAttributes({ blockcolor: value });
	}

	const onChangeBorderStyle = (value) => {
		setAttributes({ border_style: value });
	}

	const setborderradious = (value) => {
		setAttributes({ borderradiousvalue: value });
	}

	const setPaddingleftvalue = (value) => {
		setAttributes({ paddingleft: value });
	}

	const setPaddingtopvalue = (value) => {
		setAttributes({ paddingtop: value });
	}

	const setPaddingrightvalue = (value) => {
		setAttributes({ paddingright: value });
	}

	const setPaddingbottomvalue = (value) => {
		setAttributes({ paddingbottom: value });
	}

	const onChangesubtitlecolorColor = (value) => {
		setAttributes({ subtitlecolor: value });
	};

	const onChangesubcontentColor = (value) => {
		setAttributes({ subcontentcolor: value });
	};

	const setFirstName = (value) => {
		setAttributes({ isFirstNameChecked: value });
	}

	const setLastName = (value) => {
		setAttributes({ isLastNameChecked: value });
	}

	const setGender = (value) => {
		setAttributes({ iswhatgender: value });

	}
	const setEmail = (value) => {
		setAttributes({ isEmailChecked: value });
	}

	const setPhonenum = (value) => {
		setAttributes({ isPhonenumChecked: value });
	}

	const setMessage = (value) => {
		setAttributes({ isMessageChecked: value });
	}

	const setAddress = (value) => {
		setAttributes({ isAddressChecked: value });
	}

	const setRecaptcha = (value) => {
		setAttributes({ isRecaptchaEnable: value });
	}

	const set_Sitekey = (value) => {
		setAttributes({ sitekey: value });
	}

	const set_Secretkey = (value) => {
		setAttributes({ secretkey: value });
	}

	const set_email_to = (value) => {
		setAttributes({ email_to: value })
	}

	const set_email_subject = (value) => {
		setAttributes({ email_subject: value })
	}
	return (

		<div {...blockProps} >
			<InspectorControls>
				<PanelBody title={__('Contact Form Layout')} initialOpen={false}>
					<RadioControl
						label="Layout"
						help="Choose an layout."
						selected={formlayout}
						options={[
							{ label: 'One Column', value: 'one-column' },
							{ label: 'Two Column', value: 'two-column' },
						]}
						onChange={(value) => setAttributes({ formlayout: value })}
					/>


				</PanelBody>
				<PanelBody title={__('Contact Form Setting')} initialOpen={false}>
					<p>Enable Contact Form Field: </p>
					<CheckboxControl
						label="First name"
						checked={isFirstNameChecked}
						onChange={setFirstName}
					/>
					<CheckboxControl
						label="Last Name"
						checked={isLastNameChecked}
						onChange={setLastName}
					/>
					<CheckboxControl
						label="Gender"
						checked={iswhatgender}
						onChange={setGender}
					/>
					<CheckboxControl
						label="Email"
						checked={isEmailChecked}
						onChange={setEmail}
					/>
					<CheckboxControl
						label="Phone Number"
						checked={isPhonenumChecked}
						onChange={setPhonenum}
					/>
					<CheckboxControl
						label="Message"
						checked={isMessageChecked}
						onChange={setMessage}
					/>
					<CheckboxControl
						label="Address"
						checked={isAddressChecked}
						onChange={setAddress}
					/>


				</PanelBody>

				<PanelBody title={__('Email Settings')} initialOpen={false}>
					<InputControl label="Email To:"
						labelPosition="top"
						value={email_to}
						type="email"
						onChange={set_email_to}
						isPressEnterToChange />
					<hr />
					<TextareaControl
						label="Email Subject"
						rows={2}
						value={email_subject}
						onChange={set_email_subject}
					/>
				</PanelBody>

				<PanelBody title={__('Recaptcha Setting on Contact Form')} initialOpen={false}>

					<p>Do you want Recaptcha code on Contact Form ?</p>
					<CheckboxControl
						label="Is Enable ?"
						checked={isRecaptchaEnable}
						onChange={setRecaptcha}
					/>
					{

						isRecaptchaEnable == true ?
							< TextControl
								label="Site Key"
								value={sitekey}
								labelPosition="top"
								name='sitekey'
								onChange={set_Sitekey}
							/>
							: ''
					}


					{

						isRecaptchaEnable == true ?
							< TextControl
								label="Secret Key"
								value={secretkey}
								onChange={set_Secretkey}
								labelPosition="top"
								name='secretkey'
							/>
							: ''
					}


				</PanelBody>

				<PanelBody title={__('Border & Block Settings')} initialOpen={false}>
					<p>Border Color: </p>
					<ColorPalette value={bordercolor} onChange={onChangeBorderColor} />

					<p>Border Radius</p>
					<UnitControl
						onChange={setborderradious}
						value={borderradiousvalue}
					/>
					<br />
					<p>Block Color: </p>
					<ColorPalette value={blockcolor} onChange={onChangeBlockColor} />
					<br />
					<p>Border Style: </p>
					<SelectControl
						value={border_style}
						options={[
							{ label: __('Dotted'), value: __('dotted') },
							{ label: __('Dashed'), value: __('dashed') },
							{ label: __('Solid'), value: __('solid') },
							{ label: __('Double'), value: __('double') },
							{ label: __('Groove'), value: __('groove') },
							{ label: __('Ridge'), value: __('ridge') },
							{ label: __('Insert'), value: __('inset') },
							{ label: __('Outset'), value: __('outset') },
							{ label: __('None'), value: __('none') },
							{ label: __('Hidden'), value: __('hidden') },
							{ label: __('Main Dishes'), value: __('Main Dishes') },
						]}
						onChange={onChangeBorderStyle}
					/>

				</PanelBody>

				<PanelBody title={__('Padding Settings')} initialOpen={false}>

					<p>Padding Type:<sup> Top,Right,Bottom,Left </sup> </p>
					<div className='Paddingparent'>
						<div></div>
						<UnitControl className="paddingfield" onChange={setPaddingtopvalue} value={paddingtop} />
						<UnitControl className="paddingfield" onChange={setPaddingrightvalue} value={paddingright} />
						<UnitControl className="paddingfield" onChange={setPaddingbottomvalue} value={paddingbottom} />
						<UnitControl className="paddingfield" onChange={setPaddingleftvalue} value={paddingleft} />
					</div>

				</PanelBody>


				<PanelBody title={__('Color Settings')} initialOpen={false}>
					<p>Title Color: </p>
					<ColorPalette value={receipenamecolor} onChange={onChangeTitleColor} />
					<p>Sub-Title Title Color: </p>
					<ColorPalette value={subtitlecolor} onChange={onChangesubtitlecolorColor} />
					<p>Sub-Content Text Color: </p>
					<ColorPalette value={subcontentcolor} onChange={onChangesubcontentColor} />
					<p>Background Color</p>
					<ColorGradientControl
						colorValue={colorv}
						gradientValue={gradientv}
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						]}
						gradients={[
							{
								name: 'Vivid cyan blue to vivid purple',
								gradient:
									'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
								slug: 'vivid-cyan-blue-to-vivid-purple',
							},
							{
								name: 'Light green cyan to vivid green cyan',
								gradient:
									'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
								slug: 'light-green-cyan-to-vivid-green-cyan',
							},
							{
								name: 'Luminous vivid amber to luminous vivid orange',
								gradient:
									'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
								slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
							},
						]}
						label={__("Choose a color or a gradient")}
						onColorChange={(newValue) => setAttributes({ colorv: newValue })}
						onGradientChange={(newValue) => setAttributes({ gradientv: newValue })}
					/>

				</PanelBody>



			</InspectorControls>
			<div className="contact-card" style={{ borderStyle: border_style, borderColor: bordercolor, borderRadius: borderradiousvalue, paddingTop: paddingtop, paddingRight: paddingright, paddingBottom: paddingbottom, paddingLeft: paddingleft, background: gradientv }}>

				<BlockControls>
					<AlignmentControl
						value={align}
						onChange={onChangeAlign}
					/>
				</BlockControls>

				<RichText
					tagName='h3'
					style={{ color: receipenamecolor, textAlign: align }}
					placeholder={__('Contact Us Title…')}
					value={title}
					onChange={onChangeTitle}
					className="contact-maintitle"
				/>

				<RichText
					tagName='h4'
					style={{ color: receipenamecolor, textAlign: align }}
					className="contact-subtitle"
					placeholder={__('Contact Us Sub-title')}
					value={subtitle}
					onChange={onChangeSubtitle}
				/>

				{
					formlayout == 'one-column' ? console.log('get data of one column') : console.log('get data of two column')
				}

				{
					/* 1 Column Layouts IF Condition */
					formlayout == 'one-column' ?
					<div className="one-column-form">
						<form id="contact" action="" method="post">
							<div className="form-layout">

								<fieldset className="onecolumnfieldset">
									{
										isFirstNameChecked == true ?
											<input placeholder="Your Firstname" type="text" value="" tabindex="1" required autofocus />
											: ''
									}
								</fieldset>

								<fieldset className="onecolumnfieldset">
									{
										isLastNameChecked == true ?
											<input placeholder="Your Lastname" name='lastname' type="text" value="" tabindex="1" required autofocus />
											: ''
									}
								</fieldset>

								<fieldset className="onecolumnfieldset">
									{
										iswhatgender == true ?
											<RadioControl
												className="user-gender"
												label="Gender"
												selected={gender_type}
												options={[
													{ label: 'Male', value: 'Male' },
													{ label: 'Female', value: 'Female' },
												]}
												onChange={(value) => setAttributes({ gender_type: value })}
											/>
											: ''
									}
								</fieldset>

								<fieldset className="onecolumnfieldset">
									{
										isEmailChecked == true ?
											<input placeholder="Your Email Address" value="" name='emailid' type="email" tabindex="2" required />
											: ''
									}
								</fieldset>

								<fieldset className="onecolumnfieldset">
									{
										isPhonenumChecked == true ?
											<input placeholder="Your Phone number" name='phonenumber' type="tel" value="" tabindex="1" required autofocus />
											: ''
									}
								</fieldset>

								<fieldset className="onecolumnfieldset">
									{

										isAddressChecked == true ?
											<input placeholder="Your Address" name='address' type="text" value="" tabindex="1" required autofocus />
											: ''
									}
								</fieldset>
								<fieldset className="onecolumnfieldset">
									{
										isMessageChecked == true ?
											<textarea placeholder="Type your Message Here...." tabindex="5" name='message' required></textarea>
											: ''
									}
								</fieldset>
								<fieldset className="onecolumnfieldset">
									<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
								</fieldset>
							</div>
						</form>
					</div>

						:
						/* console.log('get data of two column new') */
						/* 2 Column Layouts Else Condition */
						<div>
							<Row>
								<Col span={12}>
									{
										// console.log(isRecaptchaEnable)
										isFirstNameChecked == true ?
											< InputControl
												label="First Name"
												labelPosition="top"
												name='firstname'
												value=""
											/>
											: ''
									}
								</Col>
								<Col span={12}>
									{
										isLastNameChecked == true ?
											< InputControl
												label="Last Name"
												labelPosition="top"
												name='lastname'
												value=""
											/>
											: ''
									}
								</Col>
								<Col span={12}>
									{
										iswhatgender == true ?
											<RadioControl
												label="Gender"
												className="user-gender"
												selected={gender_type}
												options={[
													{ label: 'Male', value: 'Male' },
													{ label: 'Female', value: 'Female' },
												]}
												onChange={(value) => setAttributes({ gender_type: value })}
											/>
											: ''
									}
								</Col>
							</Row>

							<Row>
								<Col span={12}>
									{
										isEmailChecked == true ?
											< InputControl
												label="Email"
												value=""
												labelPosition="top"
												type="email"
												name='emailid'
											/>
											: ''
									}
								</Col>
								<Col span={12}>
									{
										isPhonenumChecked == true ?
											< InputControl
												label="Phone Number"
												value=""
												labelPosition="top"
												name='phonenumber'
											/>
											: ''
									}
								</Col>
							</Row>

							<Row>
								<Col span={12}>
									{

										isAddressChecked == true ?
											< InputControl
												label="Address"
												value=""
												labelPosition="top"
												name='address'
											/>
											: ''
									}
								</Col>
							</Row>


							<Row>
								<Col span={24}>
									{
										isMessageChecked == true ?
											< TextareaControl
												label="Message"
												rows={2}
												value=""
												name='message'
											/>
											: ''
									}
								</Col>

							</Row>

						</div>


				}






			</div>
		</div >

	);
};

export default Edit;
