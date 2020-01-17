import FormController from "../FormController";

export default class TestFormForEachController extends FormController {
    constructor(element) {
        super(element);

        this.model = this.setModel({
            entities: [{
                sectionTitle: {
                    label: "Your personal information"
                },
                name: {
                    label: "Name",
                    name: "name",
                    required: true,
                    placeholder: "Name here...",
                    value: ''
                },
                email: {
                    label: "Email address",
                    name: "email",
                    required: true,
                    placeholder: "Email address here...",
                    value: ''
                },
                gender: {
                    label: "Select your gender",
                    required: true,
                    options: [{
                            label: "Male"
                        },
                        {
                            label: "Female",
                            value: "F"
                        }
                    ]
                },
                nationality: {
                    label: "Select your nationality",
                    placeholder: "Please select one option...",
                    required: true,
                    options: [{
                        label: "Romanian",
                        value: "RO"
                    }]
                }
            }, {
                sectionTitle: {
                    label: "Your associate personal information"
                },
                name: {
                    label: "Associate Name",
                    name: "name",
                    required: true,
                    placeholder: "Name here...",
                    value: ''
                },
                email: {
                    label: "Associate email address",
                    name: "email",
                    required: true,
                    placeholder: "Email address here...",
                    value: ''
                },
                gender: {
                    label: "Select your gender",
                    required: true,
                    options: [{
                            label: "Male"
                        },
                        {
                            label: "Female",
                            value: "F"
                        }
                    ]
                },
                nationality: {
                    label: "Select your nationality",
                    placeholder: "Please select one option...",
                    required: true,
                    options: [{
                        label: "Romanian",
                        value: "RO"
                    }, {
                        label: "German",
                        value: "DE"
                    }, {
                        label: "Italian"
                    }]
                }
            }],
            gdpr: {
                label: "Check if you agree with GDPR regulations",
                name: "gdpr",
                required: true,
                checkboxLabel: "GDPR Consent",
                checkedValue: "yes",
                uncheckedValue: "no"
            },
            terms: {
                label: "Do you accept our terms and conditions?",
                name: "terms",
                required: true,
                checkboxLabel: "Terms & Conditions",
                checkedValue: "yes",
                uncheckedValue: "no"
            }
        });
    }
}