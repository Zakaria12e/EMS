<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Destinataire;

class DestinataireController extends Controller
{
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'structur_id' => 'nullable',
            'phone' => 'required',
            'role_id' => 'nullable',
            'department_id' => 'nullable',
            'email1' => 'required|email',
            'email2' => 'nullable|email',
        ]);


        $destinataire = Destinataire::create([
            'nom_dest' => $validatedData['last_name'],
            'prenom_dest' => $validatedData['first_name'],
            'telephone_dest' => $validatedData['phone'],
            'first_email' => $validatedData['email1'],
            'second_email' => $validatedData['email2'],

        ]);

        return redirect()->back()->with('success', 'Form submitted successfully!');
    }

    public function checkUniqueFields(Request $request)
    {
        $email1Unique = Destinataire::where('first_email', $request->input('email1'))->doesntExist();


        $email2Unique = true;
        if ($request->filled('email2')) {
            $email2Unique = Destinataire::where('second_email', $request->input('email2'))->doesntExist();
        }

        $phoneUnique = Destinataire::where('telephone_dest', $request->input('phone'))->doesntExist();

        return response()->json([
            'email1Unique' => $email1Unique,
            'email2Unique' => $email2Unique,
            'phoneUnique' => $phoneUnique,
        ]);
    }
}
