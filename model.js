const educational_process_model = {
    "faculties": [{
        "faculty": "faculty_name",
        "teachers": [{
            "fullName": "full_name",
            "email": "fullName@ukma.edu.ua"
        }],
        "specialitites": [{
            "speciality":"speciality_name",
            "year": "year",
            "students": [{
                "fullName": "full_name",
                "email": "fullName@ukma.edu.ua"
            }]
        }]
    }],

    "subjects": [{
        "subject":"subject_name",
        "year": "year",
        "semester": "semester_num",
        "teachers": [{
            "lector": {
                "fullName": "full_name",
                "email": "fullName@ukma.edu.ua"
            },
            "assistants": [{
                "fullName": "full_name",
                "email": "fullName@ukma.edu.ua"
            }]
        }],
        "students": [{
            "fullName": "full_name",
            "email": "fullName@ukma.edu.ua",
            "grade": "grade",
            "tasks": [{
                "name": "task_name",
                "decription":"task_description",
                "max_grade": "max_grade_value",
            }]
        }]
    }]
}
