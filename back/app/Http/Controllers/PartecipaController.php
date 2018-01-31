<?php

namespace App\Http\Controllers;

use PHPMailer;
use Illuminate\Http\Request;
use Log;

class PartecipaController extends Controller
{

    public function send_email(Request $request)
    {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = env('SMTP_HOST');
        $mail->Username = env('SMTP_USERNAME');
        $mail->Password = env('SMTP_PASSWORD');
        $mail->SMTPSecure = 'ssl';
        $mail->SMTPAuth = true;
        $mail->Port = (int) env('SMTP_PORT');

        $mail->setFrom(env('PARTECIPA_FROM_ADDRESS'));
        $mail->addAddress(env('PARTECIPA_TO_ADDRESS'));

        if (empty($request->input('name'))
            || empty($request->input('surname'))
            || empty($request->input('address'))
            || empty($request->input('message')))
            return response([ 'error' => 'Missing fields' ], 400);

        $mail->Subject = 'Nuovo messaggio da '
                            . $request->input('name')
                            . ' ' . $request->input('surname');
        $mail->Body = 'Nome: ' . $request->input('name') . "\n"
                    . 'Cognome: ' . $request->input('surname') . "\n"
                    . 'Email: ' . $request->input('address') . "\n\n\n"
                    . $request->input('message');

        if(!$mail->send()) {
            Log::error("Message could not be sent.\nMailer Error: $mail->ErrorInfo");
            return response([ 'error' => $mail->ErrorInfo ], 500);
        }

        return response('', 201);
    }

}
